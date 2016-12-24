# coding: utf-8

import zope.interface

from schematics.models import Model
from schematics.types import BooleanType, IntType

from .interfaces import INISerializable


@zope.interface.implementer(INISerializable)
class Other(Model):
    difficulty = IntType(
        min_value=0,
        default=193791,
        required=True,
    )
    display_custom_skins = BooleanType(
        default=True,
        required=True,
    )
    allow_custom_sounds = BooleanType(
        default=True,
        required=True,
    )
    filter_user_names = BooleanType(
        default=False,
        required=True,
    )
    small_way_point_labels = BooleanType(
        default=True,
        required=True,
    )
    skip_paratrooper_views = BooleanType(
        default=False,
        required=True,
    )
    new_clouds = BooleanType(
        default=True,
        required=True,
    )

    @classmethod
    def from_ini(cls, ini):
        return cls({
            'difficulty': ini.getint(
                'NET', 'difficulty',
                fallback=cls.difficulty.default,
            ),
            'display_custom_skins': ini.getboolean(
                'NET', 'SkinDownload',
                fallback=cls.display_custom_skins.default,
            ),
            'allow_custom_sounds': ini.getboolean(
                'NET', 'allowCustomSounds',
                fallback=cls.allow_custom_sounds.default,
            ),
            'filter_user_names': ini.getboolean(
                'NET', 'filterUserNames',
                fallback=cls.filter_user_names.default,
            ),
            'small_way_point_labels': ini.getboolean(
                'game', 'SmallMapWPLabels',
                fallback=cls.small_way_point_labels.default,
            ),
            'skip_paratrooper_views': ini.getboolean(
                'game', 'SkipParatrooperViews',
                fallback=cls.skip_paratrooper_views.default,
            ),
            'new_clouds': ini.getboolean(
                'game', 'TypeClouds',
                fallback=cls.new_clouds.default,
            ),
        })
