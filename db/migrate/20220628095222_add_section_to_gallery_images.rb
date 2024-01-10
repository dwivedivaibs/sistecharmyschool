class AddSectionToGalleryImages < ActiveRecord::Migration[6.1]
  def change
    add_column :gallery_images, :section, :string
    add_column :gallery_videos, :section, :string
  end
end
