from django.conf.urls import url
from django.contrib import admin
from .api import ListViewSet,CardViewSet

from rest_framework.routers import DefaultRouter
router = DefaultRouter()

router.register(r'lists',ListViewSet)
router.register(r'cards',CardViewSet)

urlpatterns = router.urls


