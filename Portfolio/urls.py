
from django.contrib import admin
from django.urls import path,include

urlpatterns = [
    path("brokly_admin/", admin.site.urls),
    path('',include('Home.urls'))
]


# username: Brokly
# password: brokly
