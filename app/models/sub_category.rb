class SubCategory < ApplicationRecord
  has_many :services
  belongs_to :category
end
