class Provider < ApplicationRecord
  has_secure_password
  
  belongs_to :provider_type
  has_many :provider_services
  has_many :services, through: :provider_services
  validates :first_name, presence: true
  validates :last_name, presence: true
  validates :phone_number, presence: true
  validates :zip, presence: true
  validates :provider_type_id, presence: true
  validates :email, presence: true, uniqueness: true

  def update_services(service_ids)
    service_ids.each { |sid|
      ps = ProviderService.new
      ps.service_id = sid
      ps.provider_id = self.id
      ps.save
    }
  end

  def formatted_phone_number
    phone_number.insert(0, "(").insert(4, ")").insert(8, "-")
  end

  def member_since
    created_at.strftime("%b %d, %Y")
  end

  def as_json
    {
      id: id,
      first_name: first_name,
      last_name: last_name,
      email: email,
      zip: zip,
      phone_number: formatted_phone_number,
      provider_type: provider_type,
      services: services.as_json,
      member_since: member_since
    }
  end
end
