class CreateProviderTypes < ActiveRecord::Migration[5.2]
  def change
    create_table :provider_types do |t|
      t.string :type

      t.timestamps
    end
  end
end
