class User < ApplicationRecord
  validates_uniqueness_of :username
  has_many :messages

  # exclude current user
  scope :all_except, ->(user) { where.not(id: user) }
  after_create_commit { broadcast_append_to 'users' }
end
