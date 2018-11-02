class V1::ServicesController < ApplicationController
  def index
    services = Service.all
    render json: services.as_json
  end

  def show
    service = Service.find(params[:id])
    providers = service.providers
    render json: providers.as_json
  end

end