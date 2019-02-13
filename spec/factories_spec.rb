RSpec.describe 'FactoryBot factories' do
  specify 'pass linting' do
    DatabaseCleaner.clean_with(:deletion)
    DatabaseCleaner.cleaning do
      FactoryBot.lint
    end
  end
end