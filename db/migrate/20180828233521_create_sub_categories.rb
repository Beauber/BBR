class CreateSubCategories < ActiveRecord::Migration[5.2]
  def change
    create_table :sub_categories do |t|
      t.string :sub_category
      t.integer :category_id

      t.timestamps
    end
  end
end
