class CreateServices < ActiveRecord::Migration[5.2]
  def change
    create_table :services do |t|
      t.string :type
      t.integer :sub_category_id

      t.timestamps
    end
  end
end
