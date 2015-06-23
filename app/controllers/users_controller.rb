class UsersController < ApplicationController
  def index

  end

  def new
    @new_user = User.new
  end

  def create
    user = User.new(user_params)
    if user.save
      session[:user_id] = user.id
      redirect_to user_path(user)
    else
      redirect_to login_path
    end
  end

  def edit
    @user = User.find(params[:id])
  end

  def show

  end

  def update

  end

  def destroy
    user = User.find(params[:id])
    user.destroy
    redirect_to new_user_path
  end

  private

  def user_params
    params.require(:user).permit(:name, :password)
  end
end
