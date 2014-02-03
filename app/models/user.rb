class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable, :lockable,
         :recoverable, :rememberable, :trackable, :validatable, 
         :confirmable, :omniauthable

  has_many :groups_users
  has_many :groups, through: :groups_users
  paginates_per 1

  def full_name()
    first_name + " " + last_name
  end

  def super_admin?()
    groups.exists?(:name => 'Super Admin')
  end
end
