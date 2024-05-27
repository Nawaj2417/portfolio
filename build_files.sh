# echo "BUILD_START"
pip install -r requirements.txt
python3.9 manage.py collectstatic 
sudo apt install python3-pip
pip install python
# echo "BUILD END"