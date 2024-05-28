#!/bin/bash
# Build the project
#!/bin/bash

# Ensure pip is installed
if ! command -v pip &> /dev/null
then
    echo "pip could not be found"
    exit
fi

# Ensure virtualenv is installed
if ! pip show virtualenv &> /dev/null
then
    pip install virtualenv
fi

# Create and activate virtual environment
python -m venv env
source env/bin/activate

# Ensure Django is installed in the virtual environment
if ! pip show Django &> /dev/null
then
    pip install Django
fi

# Continue with your build process...


echo "Building the project..."
python3.9 -m pip install -r requirements.txt

echo "Make Migration..."
python3.9 manage.py makemigrations --noinput
python3.9 manage.py migrate --noinput

echo "Collect Static..."
python3.9 manage.py collectstatic --noinput --clear