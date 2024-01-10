class CreateDocuments < ActiveRecord::Migration[6.1]
  def change
    create_table :documents do |t|
      t.string :name
      t.string :file
      t.boolean :is_active, default: true

      t.timestamps
    end
  end
end
