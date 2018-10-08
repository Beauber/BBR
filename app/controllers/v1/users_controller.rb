class V1::UsersController < ApplicationController
  
  def create
    user = User.new(
      first_name: params[:first_name].downcase.capitalize,
      last_name: params[:last_name].downcase.capitalize,
      email: params[:email].downcase,
      password: params[:password],
      password_confirmation: params[:password_confirmation]
    )

    if user.save
      render json: {message: 'User created successfully'}, status: :created
    else
      render json: {errors: user.errors.full_messages}, status: :bad_request
    end

  end

end
