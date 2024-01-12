class HomeController < ApplicationController
  def index
    @vacancies = Vacancy.where(is_active: true)
    @banner_image = GalleryImage.active.where(section: 'banner').last
    @slider_images = GalleryImage.active.where(section: 'slider')
    @highlights_images = GalleryImage.active.where(section: 'highlight')
    @about_image = GalleryImage.active.where(section: 'about_section').last
    @photos = GalleryImage.active.where(section: 'photo_gallery')
    @highlight_title_one = Content.where(content_type: 'highlight_title_one').last
    @highlight_title_two = Content.where(content_type: 'highlight_title_two').last
    @highlight_title_three = Content.where(content_type: 'highlight_title_three').last
    @highlight_one = Content.where(content_type: 'highlight_one').last
    @highlight_two = Content.where(content_type: 'highlight_two').last
    @highlight_three = Content.where(content_type: 'highlight_three').last
    @activity = Content.where(content_type: 'activities').last
    @infrastructure = Content.where(content_type: 'infrastructure').last
    @facilities = Content.where(content_type: 'facilities').last
    @welcome_section = Content.where(content_type: 'welcome_section').last
    @salient_features = Content.where(content_type: 'salient_features').last
    @teacher_count = Content.where(content_type: 'teacher_count').last
    @student_count = Content.where(content_type: 'student_count').last
    @room_count = Content.where(content_type: 'room_count').last

    @manager_name = Content.where(content_type: 'manager_name').last
    @manager_message = Content.where(content_type: 'manager_message').last
    @manager_photo = GalleryImage.active.where(section: 'manager_photo').last

    @director_name = Content.where(content_type: 'director_name').last
    @director_message = Content.where(content_type: 'director_message').last
    @director_photo = GalleryImage.active.where(section: 'director_photo').last

    @principal_name = Content.where(content_type: 'principal_name').last
    @principal_message = Content.where(content_type: 'principal_message').last
    @principal_photo = GalleryImage.active.where(section: 'principal_photo').last
  end

  def mission_vision
  	
  end

  def vacancy
    @vacancies = Vacancy.where(is_active: true)
  end

  def founders
  	@manager_name = Content.where(content_type: 'manager_name').last
    @manager_message = Content.where(content_type: 'manager_message').last
    @manager_photo = GalleryImage.active.where(section: 'manager_photo').last

    @director_name = Content.where(content_type: 'director_name').last
    @director_message = Content.where(content_type: 'director_message').last
    @director_photo = GalleryImage.active.where(section: 'director_photo').last
    
  end

  def principal_message
  	@principal_name = Content.where(content_type: 'principal_name').last
    @principal_message = Content.where(content_type: 'principal_message').last
    @principal_photo = GalleryImage.active.where(section: 'principal_photo').last
  end
  def committee
  	@document = Document.find_by(name: "committee", is_active: true)
  end

  def faculty
  	@document = Document.find_by(name: "staff_details", is_active: true)
  end

  def oasis
  	@document = Document.find_by(name: "oasis", is_active: true)
  end

  def public_disclosure
    @document = Document.find_by(name: "public_disclosure", is_active: true)
  end

  def result_date_sheet
  	
  end
  def book_list
  	@document = Document.find_by(name: "book_list", is_active: true)
  end

  def annual_report
    @document = Document.find_by(name: "annual_report", is_active: true)
  end

  def admission_procedure
  	@admission_procedure = Content.where(content_type: 'admission_procedure').last
  end
  def prospectus
  	@document = Document.find_by(name: "prospectus", is_active: true)
  end

  def fee_stracture
  	@document = Document.find_by(name: "fee_structure", is_active: true)
  end

  def student_strength
  	@document = Document.find_by(name: "student_details", is_active: true)
  end
  def tc_entries
  	@document = Document.find_by(name: "tc_format", is_active: true)
  end
  def activities_compatitions
  	
  end
  def school_building
  	
  end

  def transport_facilities
    
  end
  def class_room
    
  end
  def infirmary
    
  end
  def library
    
  end
  def laboratories
    
  end

  def photos
    @gallery_image = GalleryImage.where(is_active: true).order(:id)
  end

  def videos
    @gallery_video = GalleryVideo.where(is_active: true).order(:id)
  end
  def contact_us
    
  end
  def feedback
    
  end
  def about_us
    @about_us = Content.where(content_type: 'about_us').last
    @digital_class = Content.where(content_type: 'digital_class').last
  end
  def committees
    @document = Document.find_by(name: "committees", is_active: true)
  end

  def extension_letter
    @document = Document.find_by(name: "extension_letter", is_active: true)
  end

  def ptm
    @document = Document.find_by(name: "ptm", is_active: true)
  end

  def affiliation_letter
    @document = Document.find_by(name: "affiliation_letter", is_active: true)
  end

  def society_registration_certificate
    @document = Document.find_by(name: "society_registration_certificate", is_active: true)
  end
  def noc
    @document = Document.find_by(name: "noc", is_active: true)
  end

  def recognition_certificate
    @document = Document.find_by(name: "recognition_certificate", is_active: true)
  end

  def building_safety_certificate
    @document = Document.find_by(name: "building_safety_certificate", is_active: true)
  end

  def fire_safety_certificate
    @document = Document.find_by(name: "fire_safety_certificate", is_active: true)
  end
  def deo_certificate
    @document = Document.find_by(name: "deo_certificate", is_active: true)
  end
  def water_sanitation_certificate
    @document = Document.find_by(name: "water_sanitation_certificate", is_active: true)
  end
  def academic_calendar
    @document = Document.find_by(name: "academic_calendar", is_active: true)
  end

  def last_three_year_results
    @document = Document.find_by(name: "last_three_year_results", is_active: true)
  end

  def book_list
    @document = Document.find_by(name: "book_list", is_active: true)
  end

  def norms_of_fixing_fee
    @document = Document.find_by(name: "norms_of_fixing_fee", is_active: true)
  end
end
