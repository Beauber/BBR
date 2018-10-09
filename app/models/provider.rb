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
end
