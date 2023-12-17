class CreateOrderItems < ActiveRecord::Migration[7.1]
  def change
    create_table :order_items do |t|
      t.string :item_id
      t.integer :quantity

      t.timestamps
    end
  end
end
