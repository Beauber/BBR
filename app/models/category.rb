class Category < ApplicationRecord
  has_many :sub_categories
  validates :category, presence: true, uniqueness: true  
end
