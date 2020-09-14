<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

/**
 * App\Models\Friend
 *
 * @property-read \App\Models\User $friend
 * @property-read \App\Models\User $user
 * @property-read string|null $status
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Friend newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Friend newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Friend query()
 * @mixin \Eloquent
 */
class Friend extends Model
{
    public const STATUS_INVITED = 'invited';
    public const STATUS_WAITED_APPROVAL = 'waited_approval';
    public const STATUS_APPROVED = 'approved';

    public $timestamps = false;

    protected $fillable = [
        'user_id', 'friend_id', 'status',
    ];

    public static function boot()
    {
        parent::boot();

        static::creating(function ($model) {
            $model->created_at = $model->freshTimestamp();
        });
    }

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function friend(): BelongsTo
    {
        return $this->belongsTo(User::class, 'friend_id');
    }
}
