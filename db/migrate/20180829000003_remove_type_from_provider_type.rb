class RemoveTypeFromProviderType < ActiveRecord::Migration[5.2]
  def change
    remove_column :provider_types, :type, :string
  end
end
