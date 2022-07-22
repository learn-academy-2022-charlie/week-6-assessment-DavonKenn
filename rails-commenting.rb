# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1) Creates a method named index inside the class
class BlogPostsController < ApplicationController
  def index
    # ---2) This assigns Blog.Post.all to the instance variable of @post.
    @posts = BlogPost.all
  end

  # ---3) This makes a method named show that takes in the instance variable post, finding blog posts by their id parameter
  def show
    @post = BlogPost.find(params[:id])
  end

  # ---4) This method is calling for a new instance of data to be passed into the BlogPost model.
  def new
    @post = BlogPost.new
  end

  def create
    # ---5) This method will create new data, ,taking in params it will redirect you to the page with all the blogs,if its not valid it will redirect us to create it again.
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to new_blog_post_path
    end
  end

  def edit
    # ---6) This is edit method is used with the update method
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # ---7)Works with the edit method, After submitted changes on 'edit' views rails will find and execute the 'update' method.
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to edit_blog_post_path
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      redirect_to blog_posts_path
    else
      # ---8) If blogpost is not deleted it goes back to blog_post_path.
      redirect_to blog_post_path(@post)
    end
  end

  # ---9)Adds protection to your backend app
  private
  def blog_post_params
    # ---10) This takes in a table and provide attributes which should be permitted.
    params.require(:blog_post).permit(:title, :content)
  end
end
