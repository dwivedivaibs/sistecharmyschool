class CreateVacancies < ActiveRecord::Migration[6.1]
  def change
    create_table :vacancies do |t|
      t.string :name
      t.string :document
      t.boolean :is_active, default: true

      t.timestamps
    end
  end
end
