class MenusController < ApplicationController
  def index
    @menus = Menu.all
    @menu = Menu.new
  end

  def show
    @menu = Menu.find params[:id]
  end

  def create
    @menu = Menu.new params[:menu]
    if @menu.save
      render :json => render_to_string(:partial => 'menu', :locals => {:menu => @menu}).to_json
    else
      render :json => @menu.errors.full_messages.join(', '), :status => :unprocessable_entity
    end
  end
end
