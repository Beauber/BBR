class V1::ProvidersController < ApplicationController
  def create
    provider = Provider.new(
      first_name: params[:first_name].downcase.capitalize,
      last_name: params[:last_name].downcase.capitalize,
      phone_number: params[:phone_number],
      zip: params[:zip],
      provider_type_id: params[:provider_type_id].to_i,
      email: params[:email].downcase,
      password: params[:password],
      password_confirmation: params[:password_confirmation]
    )

    if provider.save
      render json: {message: 'Provider created successfully'}, status: :created
    else
      render json: {errors: provider.errors.full_messages}, status: :bad_request
    end

  end

  # before_action :authenticate_user
  def index
    providers = Provider.all
    render json: providers.as_json
  end

  def show
    render json: current_provider.as_json
  end

  def update
    provider = current_provider
    # binding.pry
    provider.update_services(params["_json"])

    render json: provider.as_json
  end

end
