# echo "BUILD_START"
pip install -r requirements.txt
python manage.py collectstatic --noinput --clear
sudo apt install python3-pip
pip install python
# echo "BUILD END"