class Service < ApplicationRecord
  belongs_to :sub_category
  has_many :provider_services
  has_many :providers, through: :provider_services

  def as_json
    {
      id: id,
      service_type: service_type,
      sub_category: sub_category.sub_category,
      category: sub_category.category.category
    }
  end
end