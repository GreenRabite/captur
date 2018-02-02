class Api::PhotosController < ApplicationController
  def create
    @photo = Photo.new(photo_params)
    if @photo.save
      render :show
    else
      render json: @photo.errors.full_messages, status: 422
    end
  end

  def show
    @photo = Photo.find_by(id: params[:id])
    if @photo
      render :show
    else
      render json: ["Could not find that photo"], status: 404
    end
  end

  def index
    @photos = Photo.all
    render :index
  end

  def destroy
    @photo = Photo.find_by(id: params[:id])
    if @photo
      @photo.destroy
      render :show
    else
      render json: ["Could not find that photo"], status: 404
    end
  end

  def update
    @photo = Photo.find_by(id: params[:id])
    if @photo
      @photo.update(photo_params)
      render :show
    else
      render json: ["Could not find that photo"], status: 404
    end
  end

  private
  def photo_params
    params.require(:photo).permit(:title, :img_url, :owner_id, :album_id)
  end
end