class ProviderTokenController < Knock::AuthTokenController
  skip_before_action :verify_authenticity_token

  def create
    email = request.params["auth"] && request.params["auth"]["email"]
    password = request.params["auth"] && request.params["auth"]["password"]
    provider = Provider.find_by(email: email)
    if provider && provider.authenticate(password)
      body = {
        jwt: auth_token.token,
        provider: { 
          id: provider.id, 
          firstName: provider.first_name, 
          email: provider.email 
        }
      }
      render json: body, status: :created
    else
      render json: {}
    end

  end

end