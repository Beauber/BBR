class V1::ProvidersController < ApplicationController
  def create
    provider = Provider.new(
      first_name: params[:first_name],
      last_name: params[:last_name],
      phone_number: params[:phone_number],
      zip: params[:zip],
      provider_type_id: params[:provider_type_id].to_i,
      email: params[:email],
      password: params[:password],
      password_confirmation: params[:password_confirmation]
    )

    if provider.save
      render json: {message: 'Provider created successfully'}, status: :created
    else
      render json: {errors: provider.errors.full_messages}, status: :bad_request
    end

  end
end
