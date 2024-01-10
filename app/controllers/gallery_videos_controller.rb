class GalleryVideosController < ApplicationController
  def show
    class_name = params[:class_name].classify.safe_constantize
    @file_type = params[:file_type]
    @object = class_name.find_by(id: params[:id])
  end
end
