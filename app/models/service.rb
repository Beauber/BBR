class Service < ApplicationRecord
  belongs_to :sub_category
  has_many :provider_services
  has_many :providers, through: :provider_services
end
