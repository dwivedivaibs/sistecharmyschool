ActiveAdmin.register Vacancy do

  # See permitted parameters documentation:
  # https://github.com/activeadmin/activeadmin/blob/master/docs/2-resource-customization.md#setting-up-strong-parameters
  #
  # Uncomment all parameters which should be permitted for assignment
  #
  permit_params :name, :document, :is_active
  #
  # or
  #
  # permit_params do
  #   permitted = [:name, :document, :is_active]
  #   permitted << :other if params[:action] == 'create' && current_user.admin?
  #   permitted
  # end
  

    index do
    selectable_column
    id_column
    column "Vacancy Type", :name
    column "File" do |file|
      link_to file.document.url, file.document.url, target: "_blank"
    end
    column :is_active
    column :created_at
    column :updated_at
    actions
  end

  #form
  form do |f|
    f.inputs do
      f.input :name
      f.input :document
      unless f.object.new_record? && !f.object.document.url.present?
        ol do
          li do
            tabs do
              tab "Document", html_options: { class: 'specific_css_class' } do
                link_to(f.object.document.url, f.object.document.url, target: "_blank")
              end
            end
          end
        end
      end
      f.input :is_active
    end
    f.actions
  end
end
