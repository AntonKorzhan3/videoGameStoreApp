class CreateVideoGames < ActiveRecord::Migration[7.1]
  def change
    create_table :video_games do |t|
      t.string :name
      t.integer :price
      t.integer :quantity
      t.string :console
      t.float :rating

      t.timestamps
    end
  end
end
