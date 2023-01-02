from django.urls import path
from . import views

urlpatterns = [
    path('<int:lottery_id>/', views.index, name='index')
]