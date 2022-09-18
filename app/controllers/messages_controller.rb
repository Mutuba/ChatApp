class MessagesController < ApplicationController
  def create
    @current_user = current_user
    @message = @current_user.messages.create(content: msg_params[:content], room_id: params[:room_id])
    Turbo::StreamsChannel.broadcast_append_to(current_user)
    respond_to do |format|
      format.turbo_stream { redirect_to room_messages_path }
    end
  end

  private

  def msg_params
    params.require(:message).permit(:content)
  end
end
