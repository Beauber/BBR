class V1::ServicesController < ApplicationController
  def index
    services = Service.all
    render json: services.as_json
  end
end