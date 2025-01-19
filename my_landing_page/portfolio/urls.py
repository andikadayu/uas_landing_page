
from django.contrib import admin
from django.urls import path,include
from django.conf.urls.static import static
from django.conf import settings
from . import views
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'contact', views.ContactViewSet)

urlpatterns = [
    path('', views.home),
    path('api/', include(router.urls)),
]+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
