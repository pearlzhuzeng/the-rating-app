class UsersController < Clearance::UsersController
  private

  def user_params
    params.require(:user).permit(:name, :email, :password) || Hash.new
  end
end