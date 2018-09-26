class AddProviderTypeToProviderType < ActiveRecord::Migration[5.2]
  def change
    add_column :provider_types, :provider_type, :string
  end
end
