from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import SettingsViewSet, FormSubmissionViewSet,FormQuestionViewSet, FAQViewSet, CarouselItemViewSet, MapViewSet, DirectionViewSet

router = DefaultRouter()
router.register('settings', SettingsViewSet)
router.register('form', FormSubmissionViewSet)
router.register('question', FormQuestionViewSet)
router.register('faq', FAQViewSet)
router.register('carousel', CarouselItemViewSet)
router.register('map', MapViewSet)
router.register('direction', DirectionViewSet)

urlpatterns = [
    path('', include(router.urls)),
]