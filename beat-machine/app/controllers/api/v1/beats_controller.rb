class Api::V1::BeatsController < ApplicationController
  before_action :find_beat, only: [:update, :destroy]

  def index
    @beats = Beat.all
    render json: @beats
  end

  def create
    Beat.create(beat_params)
    redirect_to api_v1_beats_path
  end

  def update
    @beat.update(beat_params)
    if @beat.save
      render json: @beat, status: :accepted
    else
      render json: { errors: @beat.errors.full_messages }, status: :unprecessible_entity
    end
  end

  def destroy
    @beat.destroy
    redirect_to api_v1_beats_path
  end

  private

  def beat_params
    params.permit(:name, :steps, :tempo, :shuffle)
  end

  def find_beat
    @beat = Beat.find(params[:id])
  end
end
