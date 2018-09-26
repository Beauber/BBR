class CreateProviders < ActiveRecord::Migration[5.2]
  def change
    create_table :providers do |t|
      t.string :email
      t.string :password_digest
      t.string :first_name
      t.string :last_name
      t.string :phone_number
      t.string :zip
      t.integer :provider_type_id

      t.timestamps
    end
  end
end
