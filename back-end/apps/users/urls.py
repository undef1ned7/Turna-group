from rest_framework.routers import DefaultRouter
from django.urls import path
from apps.users.views import UserAPI
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView


router = DefaultRouter()
router.register('users', UserAPI, "api_users")

urlpatterns = [
    path('login/', TokenObtainPairView.as_view(), name='api_login'),
    path('refresh/', TokenRefreshView.as_view(), name='api_refresh')
]


urlpatterns += router.urls