Rails.application.routes.draw do
  devise_for :users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)
  # get 'home/index'

  root 'home#index'
  get 'home/mission_vision'
  get 'home/founders'
  get 'home/principal_message'
  get 'home/committee'
  get 'home/committees'
  get 'home/faculty'
  get 'home/oasis'
  get 'home/result_date_sheet'
  get 'home/book_list'
  get 'home/admission_procedure'
  get 'home/prospectus'
  get 'home/fee_stracture'
  get 'home/student_strength'
  get 'home/tc_entries'
  get 'home/activities_compatitions'
  get 'home/school_building'
  get 'home/transport_facilities'
  get 'home/class_room'
  get 'home/infirmary'
  get 'home/library'
  get 'home/laboratories'
  get 'home/photos'
  get 'home/videos'
  get 'home/contact_us'
  get 'home/feedback'
  get 'home/about_us'
  get 'home/vacancy'
  get 'home/ptm'
  get 'home/public_disclosure'
  get 'home/extension_letter'
  get 'home/annual_report'

  resource :gallery_images, only: :show
  resource :gallery_videos, only: :show

  get 'home/affiliation_letter'
  get 'home/society_registration_certificate'
  get 'home/noc'
  get 'home/recognition_certificate'
  get 'home/building_safety_certificate'
  get 'home/fire_safety_certificate'
  get 'home/deo_certificate'
  get 'home/water_sanitation_certificate'
  get 'home/academic_calendar'
  get 'home/last_three_year_results'
  get 'home/norms_of_fixing_fee'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
