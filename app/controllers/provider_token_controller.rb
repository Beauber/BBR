class ProviderTokenController < Knock::AuthTokenController
  def create
    email = request.params["auth"] && request.params["auth"]["email"]
    provider = Provider.find_by(email: email)
    body = {
      jwt: auth_token.token,
      provider: { id: provider.id, name: provider.first_name, email: provider.email }
    }
    
    render json: body, status: :created
  end
end
