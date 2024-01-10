class CreateGalleryVideos < ActiveRecord::Migration[6.1]
  def change
    create_table :gallery_videos do |t|
      t.string :title
      t.string :description
      t.string :video
      t.boolean :is_active, default: true

      t.timestamps
    end
  end
end
