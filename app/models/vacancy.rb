class Vacancy < ApplicationRecord
	mount_uploader :document, VacancyUploader
end
