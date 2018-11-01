class SubCategory < ApplicationRecord
  has_many :services
  belongs_to :category

  def as_json
    {
      id: id,
      sub_category: sub_category,
      category: category,
      services: services.map {|s| s.service_type}
    }
  end
end
