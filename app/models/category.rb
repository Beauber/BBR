class Category < ApplicationRecord
  has_many :sub_categories
  has_many :services, through: :sub_categories
  validates :category, presence: true, uniqueness: true

  def sub_category_list
    sub_categories.map {|sub| sub.sub_category }
  end

  def service_list
    services.map {|s| {sub_category: s.sub_category.sub_category, service: s.service_type} }
  end

  def as_json
    {
      id: id,
      category: category,
      sub_categories: sub_category_list,
      services: service_list
    }
  end
end
